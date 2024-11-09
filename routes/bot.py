import logging
import traceback

from flask import Blueprint, request, jsonify
from services import BotService

bot = Blueprint("bot", __name__)
logger = logging.getLogger("bot")

bot_service_obj = BotService()

@bot.route("/answer_question", methods=["POST"])
def answer_question():
    try:
        data = request.get_json()
        question = data["question"]
        response = bot_service_obj.answer_question(question)
        return jsonify(response)
    
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


@bot.route("/load_conversation", methods=["GET"])
def load_conversation():
    try:
        data = request.args.to_dict()
        start_index = data["start_index"]
        stop_index = data["stop_index"]

        response = bot_service_obj.load_conversation(start_index, stop_index)
        
        print("response", response)
        return jsonify(response)
    
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500
