const pricingData = {
    imgPath: './img/pricing/',
    baseURL: './pricing/',
    list: [
        {
            img: 'price_basic.png',
            classes: 'col-12 col-sm-10 ml-sm-1 col-md-5 col-lg-4 ml-lg-2',
            price: 49,
            currency: '$',
            title: 'Basic',
            slug: 'basic',                      // www.example.com/pricing/basic
            features: {
                space: 5,
                databases: 5,
                support: true,
                dailyBackup: true
            }
        },
        {
            img: 'price_premium.png',
            classes: 'col-12 col-sm-10 ml-sm-1 col-md-5 ml-md-0 col-lg-4',
            price: 149,
            currency: '$',
            title: 'Pro',
            slug: 'premium',                      // www.example.com/pricing/premium
            features: {
                space: 10,
                databases: 50,
                unlimitedEmail: true,
                dailyBackup: true
            }
        }
    ]
}

export { pricingData }