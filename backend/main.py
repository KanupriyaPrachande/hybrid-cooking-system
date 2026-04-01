from fastapi import FastAPI
import random

from decision import decide_source
app = FastAPI()

# ✅ API 1: Get data (for graph)
@app.get("/data")
def get_data():
    return [
        {"time": "1", "energy": 10},
        {"time": "2", "energy": 20},
        {"time": "3", "energy": 15},
    ]

# ✅ API 2: Control system
@app.post("/control")
def control_system(data: dict):
    return {
        "message": "System updated",
        "status": data
    }

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