def decide_source(solar, electricity):
    if solar:
        return "Solar"
    elif electricity:
        return "Electric"
    else:
        return "LPG"