const { test, expect } = require('@playwright/test');

test('Check links on the page @checklinks', async ({ page }) => {
    await page.goto('');
    const element = process.env.WebElement
   const links = await page.$$eval(element, (anchor) => anchor.filter((link)=>{
   const href = link.getAttribute ('href');
   return   href && !href.startsWith("#") && !href.startsWith("tel:") && !href.startsWith("mailto:");
   }).map((link)=> link.href)
   );
   for (const link of links) {
     await page.goto(link);
     const response = await page.goto(link);
     await expect.soft(page.getByText('Oops!')).toBeHidden();
     console.log("This is the page title: ",await page.title())
     const statusCode = response.status();
     console.log(link);
     expect.soft(statusCode).toEqual(200);
     await page.goBack();
   }
})