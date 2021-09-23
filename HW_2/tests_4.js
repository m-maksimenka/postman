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

let jsonData = pm.response.json();

pm.test("JSON schema is valid", function() {
    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});

// 3
let requestData = request.data;
let weight = requestData.weight;
let daily_food = jsonData.daily_food;
let daily_sleep = jsonData.daily_sleep;

pm.test("Result of multiplying by 0.012 is correct", function() {
    pm.expect(daily_food).to.eql(weight * 0.012);
});

pm.test("Result of multiplying by 2.5 is correct", function() {
    pm.expect(daily_sleep).to.eql(weight * 2.5);
});