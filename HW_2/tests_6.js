let jsonData = pm.response.json();
let randomCurrency = jsonData[Math.floor(Math.random() * jsonData.length)];
pm.environment.set("random_id", randomCurrency.Cur_ID);