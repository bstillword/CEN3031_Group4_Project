const scraperObject = {
    search: "lion",
	url: "https://www.color-hex.com/color-palettes/?keyword=",
	async scraper(browser){
		try{
			let page = await browser.newPage();
			console.log(`Navigating to ${this.url}${this.search}...`);
			await page.goto(this.url+this.search);
			let palette = await page.$$eval("div[class='palettecolordiv']", eHand => eHand.map(e => e.getAttribute('style')));
			
			let colors = [];
			for(let i = 0; i < 6; i++)
			colors.push(JSON.stringify(palette[i].split(':')[1]));

			await browser.close();
			return colors;
		}
		catch(e){
			console.log(e)
		}
	}
}
module.exports = scraperObject;