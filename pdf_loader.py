# from langchain.vectorstores import Chroma
# from langchain.embeddings import OpenAIEmbeddings
# from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain.llms import OpenAI
# from langchain.chains import RetrievalQA
# from langchain.document_loaders import TextLoader
# from langchain.document_loaders import DirectoryLoader

# from langchain.document_loaders import PyPDFLoader
# from langchain.document_loaders import PyPDFDirectoryLoader

# import os

# #key line

# loader = PyPDFDirectoryLoader("./data/")
# documents = loader.load()
# print(len(documents))


# #The text is split into manageable chunks for embedding.
# text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
# texts = text_splitter.split_documents(documents)

# print(len(texts))


# # Embeddings for the text chunks are generated and stored in the Chroma database.
# # Supplying a persist_directory will store the embeddings on disk
# persist_directory =  './chroma_db/'

# embedding = OpenAIEmbeddings()

# vectordb = Chroma.from_documents(documents=texts,
#                                  embedding=embedding,
#                                  persist_directory=persist_directory)

# vectordb.persist()
# vectordb = None

# print("completed")