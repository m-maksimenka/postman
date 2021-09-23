// 1
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
const schema = {
    "type": "object",
    "properties": {
        "age": {
            "type": "integer"
        },
        "daily_food": {
            "type": "number"
        },
        "daily_sleep": {
            "type": "number"
        },
        "name": {
            "type": "string"
        }
    },
    "required": [
        "age",
        "daily_food",
        "daily_sleep",
        "name"
    ],
    "additionalProperties": false
}

pm.test("JSON schema is correct", function() {
    pm.response.to.have.jsonSchema(schema);
});

// 3
pm.test("Multiplication result is correct", function() {
    let requestData = request.data;
    let responseJson = pm.response.json();
    let weight = requestData.weight;
    let daily_food = responseJson.daily_food;
    let daily_sleep = responseJson.daily_sleep;
    pm.expect(daily_food).to.eql(weight * 0.012);
    pm.expect(daily_sleep).to.eql(weight * 2.5);
});