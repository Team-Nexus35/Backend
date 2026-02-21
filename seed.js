require("dotenv").config();
const bcrypt = require("bcrypt");
const { sequelize, User, Profile, Opportunity } = require("./src/models");

async function seedDatabase() {
  try {
    console.log("Seeding database...");

   
    

    

    const count = await Opportunity.count();

    if (count === 0) {
     

         
    await Opportunity.bulkCreate([
      { title: "Agro Growth Grant 2026", description: "Grant support for agriculture SMEs.", type: "Grant", sector: "Agriculture", region: "Nigeria", minYears: 2, minEmployees: 5, link: "https://afdb.org/agro-growth-grant" },
      { title: "Kenya Agri Expansion Fund", description: "Funding for Kenyan agricultural startups.", type: "Grant", sector: "Agriculture", region: "Kenya", minYears: 2, minEmployees: 4, link: "https://agrifund.go.ke/expansion" },
      { title: "Ghana Green Farming Support", description: "Grant for sustainable farming in Ghana.", type: "Grant", sector: "Agriculture", region: "Ghana", minYears: 1, minEmployees: 3, link: "https://mofa.gov.gh/green-farming" },
      { title: "Rwanda Agro Development Loan", description: "Loan for agro-processing companies.", type: "Loan", sector: "Agriculture", region: "Rwanda", minYears: 2, minEmployees: 4, link: "https://rdb.rw/agro-loan" },
      { title: "South Africa Farming Equipment Loan", description: "Loan for agricultural machinery.", type: "Loan", sector: "Agriculture", region: "South Africa", minYears: 3, minEmployees: 6, link: "https://agrisouthafrica.co.za/equipment-loan" },

      { title: "Nigeria Tech Innovation Grant", description: "Grant for innovative Nigerian startups.", type: "Grant", sector: "Technology", region: "Nigeria", minYears: 1, minEmployees: 3, link: "https://nitda.gov.ng/innovation-grant" },
      { title: "Kenya Digital Economy Fund", description: "Grant for digital startups in Kenya.", type: "Grant", sector: "Technology", region: "Kenya", minYears: 1, minEmployees: 2, link: "https://ict.go.ke/digital-fund" },
      { title: "South Africa AI Growth Grant", description: "Funding for AI and data startups.", type: "Grant", sector: "Technology", region: "South Africa", minYears: 2, minEmployees: 5, link: "https://innovationhub.co.za/ai-grant" },
      { title: "Egypt Fintech Expansion Loan", description: "Loan for fintech companies.", type: "Loan", sector: "Technology", region: "Egypt", minYears: 2, minEmployees: 4, link: "https://cbe.org.eg/fintech-loan" },
      { title: "Rwanda Startup Boost Program", description: "Grant for early-stage startups.", type: "Grant", sector: "Technology", region: "Rwanda", minYears: 1, minEmployees: 2, link: "https://risa.rw/startup-boost" },

      { title: "Ghana SME Retail Grant", description: "Grant for retail SMEs.", type: "Grant", sector: "Retail", region: "Ghana", minYears: 1, minEmployees: 3, link: "https://ghanatrade.gov.gh/retail-grant" },
      { title: "Nigeria Retail Boost Loan", description: "Loan for retail expansion.", type: "Loan", sector: "Retail", region: "Nigeria", minYears: 2, minEmployees: 4, link: "https://boi.ng/retail-loan" },
      { title: "Kenya Women Retail Grant", description: "Funding for women-led retail businesses.", type: "Grant", sector: "Retail", region: "Kenya", minYears: 1, minEmployees: 2, link: "https://womenenterprise.go.ke/grant" },
      { title: "South Africa Inventory Finance", description: "Loan for retail inventory purchase.", type: "Loan", sector: "Retail", region: "South Africa", minYears: 2, minEmployees: 5, link: "https://sefa.org.za/inventory-loan" },
      { title: "Egypt SME Growth Fund", description: "Retail expansion funding.", type: "Grant", sector: "Retail", region: "Egypt", minYears: 1, minEmployees: 3, link: "https://msme.eg/sme-growth-fund" },

      { title: "Nigeria Manufacturing Growth Grant", description: "Grant for expanding factories.", type: "Grant", sector: "Manufacturing", region: "Nigeria", minYears: 3, minEmployees: 10, link: "https://boi.ng/manufacturing-grant" },
      { title: "Kenya Industrial Upgrade Loan", description: "Loan for manufacturing equipment.", type: "Loan", sector: "Manufacturing", region: "Kenya", minYears: 4, minEmployees: 12, link: "https://industrialfund.go.ke/upgrade-loan" },
      { title: "South Africa Export Manufacturing Fund", description: "Grant for export-focused manufacturers.", type: "Grant", sector: "Manufacturing", region: "South Africa", minYears: 3, minEmployees: 8, link: "https://dtic.gov.za/export-grant" },
      { title: "Ghana Factory Expansion Loan", description: "Loan for scaling production.", type: "Loan", sector: "Manufacturing", region: "Ghana", minYears: 3, minEmployees: 10, link: "https://ghanaindustrialfund.gov.gh/expansion" },
      { title: "Egypt Production Line Grant", description: "Funding for industrial production lines.", type: "Grant", sector: "Manufacturing", region: "Egypt", minYears: 2, minEmployees: 6, link: "https://industry.gov.eg/production-grant" },

      { title: "African Youth Enterprise Grant", description: "Pan-African grant for youth-led businesses.", type: "Grant", sector: "Retail", region: "Nigeria", minYears: 1, minEmployees: 2, link: "https://africanyouthfund.org/grant" },
      { title: "Pan Africa SME Working Capital Loan", description: "Working capital loan for SMEs.", type: "Loan", sector: "Technology", region: "Kenya", minYears: 2, minEmployees: 3, link: "https://panafricasme.org/loan" },
      { title: "Women in Business Africa Grant", description: "Support for women entrepreneurs across Africa.", type: "Grant", sector: "Agriculture", region: "Ghana", minYears: 1, minEmployees: 2, link: "https://womeninbusiness.africa/grant" },
      { title: "East Africa Expansion Loan", description: "Loan for business scaling.", type: "Loan", sector: "Manufacturing", region: "Rwanda", minYears: 2, minEmployees: 4, link: "https://eacbusinessfund.org/loan" },
      { title: "West Africa Growth Fund", description: "Funding for SMEs in West Africa.", type: "Grant", sector: "Retail", region: "Nigeria", minYears: 2, minEmployees: 5, link: "https://wagrowthfund.org/grant" },
      { title: "Southern Africa Innovation Grant", description: "Grant for innovative SMEs.", type: "Grant", sector: "Technology", region: "South Africa", minYears: 1, minEmployees: 3, link: "https://innovationafrica.org/grant" },
      { title: "North Africa Business Development Loan", description: "Loan for North African enterprises.", type: "Loan", sector: "Manufacturing", region: "Egypt", minYears: 3, minEmployees: 6, link: "https://nabdl.org/loan" },
      { title: "Rwanda SME Acceleration Grant", description: "Funding for scaling SMEs.", type: "Grant", sector: "Retail", region: "Rwanda", minYears: 1, minEmployees: 2, link: "https://rwandasme.gov.rw/grant" },
      { title: "Kenya Green Energy Grant", description: "Support for renewable energy startups.", type: "Grant", sector: "Technology", region: "Kenya", minYears: 1, minEmployees: 2, link: "https://greenenergyfund.ke/grant" },
      { title: "Ghana Agro-Tech Innovation Fund", description: "Grant for agro-tech startups.", type: "Grant", sector: "Agriculture", region: "Ghana", minYears: 2, minEmployees: 3, link: "https://agrotechghana.org/fund" }
    ]);
console.log("Opportunities seeded successfully");
    } else {
      console.log("Opportunities already exist. Skipping...");
    }

    process.exit();

  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seedDatabase();