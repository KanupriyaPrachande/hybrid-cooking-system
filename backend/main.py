from fastapi import FastAPI
import random

from backend.decision import decide_source

app = FastAPI()

@app.get("/status")
def get_status():
    solar = random.choice([True, False])
    electricity = random.choice([True, False])

    source = decide_source(solar, electricity)

    return {
        "solar": solar,
        "electricity": electricity,
        "current_source": source
    }