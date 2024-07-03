// import locator from "../pages/loc";

// describe(
//   "User Management test for Orange HRML",
//   { testIsolation: false },
//   () => {
//     let userName = "Admin";
//     let password = "admin123";
//     let baseUrl = "https://opensource-demo.orangehrmlive.com/web/auth/login";
//     let date = new Date();
//     let adminUser = "test222" + date.getTime();

//     before(() => {
//       cy.clearAllCookies();
//       cy.clearLocalStorage();
//       cy.clearAllSessionStorage();
//     });

//     it("User login to the orange HRM portal", () => {
//       cy.Login(baseUrl, userName, password);
//     });
    
//     it("User click on admin tab in left menu", () => {
//       locator.containsLocatorWithText("menuItem", "Admin").click();
//       cy.contains("h6", "Admin").should("be.visible");
//     });
    
//     it("user click on add user button and fill all the required details and click on save button", () => {
//       cy.contains(".oxd-button", "Add").click();
//       locator.getLocator("selectDropDown").eq(0).click();
//       cy.wait(5000);
//       locator.containsLocatorWithText("options", "ESS").click();
//       locator.getLocator("inputField").eq(0).type("Rahul Das");
//       locator.containsLocatorWithText("autoSuggestion", "Rahul").click();
//       locator.getLocator("selectDropDown").eq(1).click();
//       locator.containsLocatorWithText("options", "Enabled").click();
//       [adminUser, "test123", "test123"].forEach((val, index) => {
//         locator
//           .getLocator("inputField")
//           .eq(index + 1)
//           .type(val);
//       });
//       locator.getLocator("submitBtn").contains("Save").click();
//       cy.wait(5000);
//     });
    
//     it("User fill the username under the System Users", () => {
//       cy.wait(5000);
//       locator.getLocator("inputField").eq(0).type("abc124");
//     });
    
//     it("User select the User Role under the System Users", () => {
//       locator.getLocator("selectDropDown").eq(0).click();
//       locator.containsLocatorWithText("options", "Admin").click();
//     });
    
//     it("User fill the Employee Name under the System Users", () => {
//       locator.getLocator("inputField").eq(1).type("Rahul Das");
//       locator.containsLocatorWithText("autoSuggestion", "Rahul").click();
//     });
    
//     it("User fill the Status under the System Users", () => {
//       locator.getLocator("selectDropDown").eq(1).click();
//       locator.containsLocatorWithText("options", "Enabled").click();
//     });
    
//     it("User click on search button under the System Users", () => {
//       locator.getLocator("submitBtn").contains("Search").click();
//     });
    
//     it("User verify the number of records avilable in table after search", () => {
//       cy.wait(2000);
//       locator
//         .containsLocatorWithText("recordFound", "Record Found")
//         .should("be.visible")
//         .and("contain.text", "(1)");
//       locator.getLocator("recordInTable").should("have.length", 1);
//     });

//     it("reset the serach", () => {
//       cy.contains('[type="button"]', "Reset").click({ force: true }).wait(5000);
//     });

//     it("sort the data in Descending order", () => {
//       let list = [];
//       locator
//         .getLocator("recordInTable")
//         .each(($el) => {
//           cy.wrap($el)
//             .find('div[role="cell"]')
//             .eq(1)
//             .then(($el1) => {
//               list.push($el1.text());
//             });
//         })
//         .then(() => {
//           locator.getLocator("sortIconButton").eq(0).click();
//           locator
//             .containsLocatorWithText('[role="dropdown"] li', "Descending")
//             .click();
//           let newList = list.reverse();
//           console.log(newList);
//           locator.getLocator("recordInTable").each(($el, index) => {
//             cy.wrap($el)
//               .find('div[role="cell"]')
//               .eq(1)
//               .should("have.text", newList[index]);
//           });
//         });
//     });

//     it("edit the user", () => {
//       locator
//         .getLocator("recordInTable")
//         .eq(0)
//         .find('[type="button"]')
//         .eq(1)
//         .click();
//       cy.contains(".oxd-text--h6", "Edit User").should("be.visible");
//       locator.getLocator("inputField").eq(1).clear().type(`${adminUser}12`);
//       locator.getLocator("submitBtn").contains("Save").click();
//       cy.wait(5000);
//     });

//     it("delete the user", () => {
//       locator
//         .getLocator("recordInTable")
//         .eq(0)
//         .find('[type="button"]')
//         .eq(0)
//         .click();
//       locator
//         .getLocator("deleteModelPopup")
//         .should("be.visible")
//         .and("have.text", "Are you Sure?");
//       cy.contains(
//         "The selected record will be permanently deleted. Are you sure you want to continue?"
//       ).should("be.visible");
//       locator.getLocator("deleteYesButton").contains(" Yes, Delete").click();
//     });
//   }
// );
