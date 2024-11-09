from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

import os

os.environ["OPENAI_API_KEY"] = "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"

# Embed and store the texts
persist_directory = './chroma_db/'
embedding = OpenAIEmbeddings()

# Load the persisted database
vectordb = Chroma(persist_directory=persist_directory, embedding_function=embedding)
retriever = vectordb.as_retriever(search_kwargs={"k": 2})

# Use ChatOpenAI for the chat model
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True
)

# Function to get LLM response with cited sources
def get_llm_response(query):
    response = {}
    llm_response = qa_chain(query)
    response["response"] = llm_response['result']
    response["meta"] = []

    for source in llm_response["source_documents"]:
        meta = source.metadata
        page = source.metadata.get('page') + 1
        meta['page'] = page
        response["meta"].append(meta)

    return response
