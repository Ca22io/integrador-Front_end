from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

#Cria uma nova aplicação
app = FastAPI()

templates = Jinja2Templates(directory="templates")

# Monta e disponibiliza uma posta onde irá ficar os arquivos estáticos da página
app.mount(path="/static", app=StaticFiles(directory="static"), name="static")
#importante ter as frameworks nestá pasta também

#Metodo que cria uma rota acessivel por um navegador
@app.get("/")#Decorator tudo que começa com um @
def getRoot(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/cesta")
def getRoot(request: Request):
    return templates.TemplateResponse("cesta.html", {"request": request})

if __name__ == "__main__":
    uvicorn.run(app="main:app", reload=True)