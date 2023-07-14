"""
    API
"""


from enum import Enum
from fastapi import FastAPI
from typing import Union

from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


app = FastAPI()

fake_items_db = [{"item_name": "Foo"}, {
    "item_name": "Bar"}, {"item_name": "Baz"}]


class ModelName(str, Enum):
    """_summary_

    Args:
        str (_type_): _description_
        Enum (_type_): _description_
    """
    joao = "joao"
    vitor = "vitor"
    maximo = "maximo"


@app.get("/")
async def root():
    """First Route

    Returns:
        _type_: Json with data
    """
    return {"message": "Hello World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    """_summary_

    Args:
        item_id (int): _description_

    Returns:
        _type_: _description_
    """
    return {"item_id": item_id}


@app.get('/models/{model_name}')
async def get_model(model_name: ModelName):
    """_summary_

    Args:
        model_name (ModelName): _description_

    Returns:
        _type_: _description_
    """
    if model_name is ModelName.joao:
        return {"model_name": model_name, "message": "okok joao"}

    if model_name.value == ModelName.maximo:
        return {"model_name": model_name, "message": "okok maximo"}

    return {"model_name": model_name, "message": "residuos"}


@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    """_summary_

    Args:
        file_path (str): _description_

    Returns:
        _type_: _description_
    """
    return {"file_path": file_path}


@app.get("/items/")
async def read_item_query(skip: int = 0, limit: int = 10):
    """_summary_

    Args:
        skip (int, optional): _description_. Defaults to 0.
        limit (int, optional): _description_. Defaults to 10.

    Returns:
        _type_: _description_
    """
    return fake_items_db[skip:skip + limit]


@app.post('/items/{item_id}')
async def create_item(item_id: int, item: Item, q: Union[str, None] = None):
    """_summary_

    Args:
        item_id (int): _description_
        item (Item): _description_
        q (Union[str, None], optional): _description_. Defaults to None.

    Returns:
        _type_: _description_
    """
    result = {"item_id": item_id, **item.model_dump()}
    if q:
        result.update({"q": q})
    return result


@app.put('/items/{item_id}')
async def update_item(item_id: int, item: Item):
    """_summary_

    Args:
        item_id (int): _description_
        item (Item): _description_

    Returns:
        _type_: _description_
    """
    print({**item.model_dump()})
    return {"item_id": item_id, **item.model_dump()}


# Documentation -> Query params and string validations
