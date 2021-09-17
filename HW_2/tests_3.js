// 1
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2
pm.test("JSON schema is OK", function() {
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
        }
    }
    pm.response.to.have.jsonSchema(schema)
});

// for 3 and 4
const requestData = request.data;
const responseJson = pm.response.json();
let salary = parseInt(requestData.salary);

// 3
pm.test("Multiplication result is correct", function() {
    pm.expect(responseJson.salary[0]).to.eql(salary);
    pm.expect(Number(responseJson.salary[1])).to.eql(salary * 2);
    pm.expect(Number(responseJson.salary[2])).to.eql(salary * 3);
});

// 4
pm.test("The second array element is greater than the zero element and the first element", function() {
    pm.expect(parseInt(responseJson.salary[2])).to.be.greaterThan(parseInt(responseJson.salary[0]));
    pm.expect(parseInt(responseJson.salary[2])).to.be.greaterThan(parseInt(responseJson.salary[1]));
});