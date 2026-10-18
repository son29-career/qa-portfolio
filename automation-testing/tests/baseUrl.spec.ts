import { test ,expect } from "@playwright/test";

test("verify the base url of sauce demo", async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle("Swag Labs");
})

