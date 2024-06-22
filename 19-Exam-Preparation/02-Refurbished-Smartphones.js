class RefurbishedSmartphones {
    availableSmartphones = [];
    soldSmartphones = [];

    constructor(retailer, revenue = 0) {
        this.retailer = retailer;
        this.revenue = revenue;
    }

    addSmartphone (model, storage, price, condition) {
        if (!model) {
            throw new Error("Invalid smartphone!");
        }

        if (!Number.isInteger(storage) || storage < 0) {
            throw new Error("Invalid smartphone!");
        }

        if (price < 0) {
            throw new Error("Invalid smartphone!");
        }

        if (!condition) {
            throw new Error("Invalid smartphone!");
        }

        const newSmartphone = {model, storage, price, condition};
        this.availableSmartphones.push(newSmartphone);

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone (model, desiredStorage) {
        const smartphone = this.availableSmartphones.find(phone => phone.model === model);

        if (!smartphone) {
            throw new Error(`${model} was not found!`);
        }

        let currentPrice = smartphone.price;
        let insufficientStorage = desiredStorage - smartphone.storage;

        if (insufficientStorage > 0 && insufficientStorage <= 128) {
            currentPrice = currentPrice * 0.9;
        }

        if (insufficientStorage > 0 && insufficientStorage > 128) {
            currentPrice = currentPrice * 0.8;
        }

        this.availableSmartphones = this.availableSmartphones.filter(phone => phone.model !== model);

        this.soldSmartphones.push({
            model: smartphone.model,
            storage: smartphone.storage,
            price: currentPrice,
        });

        this.revenue += currentPrice;

        return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    }

    upgradePhones () {
        let messages = ['Upgraded Smartphones:'];

        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;
            const message = `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`;
            messages.push(message);
        });

        return messages.join("\n");
    }

    salesJournal (criteria) {
        const criterias = ["storage", "model"];
        if (!criterias.includes(criteria)) {
            throw new Error("Invalid criteria!");
        }

        const sorters = {
            storage: (a, b) => b.storage - a.storage,
            model: (a, b) => a.model.localeCompare(b.model),
        };

        let messages = [
            `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldSmartphones.length} smartphones sold:`,
        ];

        this.soldSmartphones.sort(sorters[criteria].forEach(phone => messages.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`)));

        return messages.join('\n');
    }
}


let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));
