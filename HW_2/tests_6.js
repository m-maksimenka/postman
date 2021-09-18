const responseJson = pm.response.json();
let randomCurrency = responseJson[Math.floor(Math.random() * responseJson.length)];
pm.environment.set("random_id", randomCurrency.Cur_ID);