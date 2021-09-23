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
        "name": {
            "type": "string",
        },
        "salary": {
            "type": "array",
            "minItems": 3,
            "maxItems": 3,
            "items": [
                {
                    "type": "integer"
                },
                {
                    "type": "string",
                },
                {
                    "type": "string"
                }
            ]
        }
    },
    "required": [
        "age",
        "name",
        "salary"
    ],
    "additionalProperties": false
}

let jsonData = pm.response.json();

pm.test("JSON schema is valid", function() {
    pm.expect(tv4.validate(jsonData, schema)).to.be.true;
});

// 3
let requestData = request.data;
let salary = parseInt(requestData.salary);

pm.test("Result of multiplying by 1 is correct", function() {
    pm.expect(jsonData.salary[0]).to.eql(salary);
});

pm.test("Result of multiplying by 2 is correct", function() {
    pm.expect(Number(jsonData.salary[1])).to.eql(salary * 2);
});

pm.test("Result of multiplying by 3 is correct", function() {
    pm.expect(Number(jsonData.salary[2])).to.eql(salary * 3);
});

// 4
pm.test("The second array element is greater than the zero element", function() {
    pm.expect(parseInt(jsonData.salary[2])).to.be.greaterThan(parseInt(jsonData.salary[0]));
});

pm.test("The second array element is greater than the first element", function() {
    pm.expect(parseInt(jsonData.salary[2])).to.be.greaterThan(parseInt(jsonData.salary[1]));
});