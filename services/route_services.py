import json
from models import Chat
from database import session
from sqlalchemy import desc
from .llm_service import get_llm_response

class BotService:

    def __init__(self):
        pass

    def obj_to_dict(self, data):
        response = {}
        if data is None:
            return {}
        for c in data.__table__.columns:
            if c.name == "meta":
                response["meta"] = json.loads(getattr(data, c.name))
            elif c.name not in ["created_date", "updated_date"]:
                response[c.name] = getattr(data, c.name)
            else:
                response[c.name] = str(getattr(data, c.name))
        return response

    def obj_to_list(self, data):
        list_dicts = []
        if data is None:
            return []
        for obj in data:
            list_dicts.append(self.obj_to_dict(obj))        
        return list_dicts

    def answer_question(self, question):

        response = get_llm_response(question)

        new_conversation = Chat(
            question = question,
            answer = response['response'],
            meta = json.dumps(response["meta"])
        )
        session.add(new_conversation)
        session.commit()
        
        return {"status": True, "answer": response['response'], "meta": response["meta"]}
    
    def load_conversation(self, start_index = 0, stop_index = 10):
        # Offset by 9 to start at the 10th record
        # Limit to 11 records (10 to 20 inclusive)
        print("start_index", start_index)
        print("stop_index", stop_index)

        latest_records = session.query(Chat).order_by(desc(Chat.created_date)).offset(start_index).limit(stop_index).all()
        print("latest_records", latest_records)
        return {"status": True, "data": self.obj_to_list(latest_records)}
