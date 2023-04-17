import prisma from "../src/config/database.js";

async function main() {
    await prisma.countries.createMany({
        data: [
            {
                "name": "Afghanistan"
            },
            {
                "name": "Albania"
            },
            {
                "name": "Algeria"
            },
            {
                "name": "American Samoa"
            },
            {
                "name": "Andorra"
            },
            {
                "name": "Angola"
            },
            {
                "name": "Anguilla"
            },
            {
                "name": "Antarctica"
            },
            {
                "name": "Antigua and Barbuda"
            },
            {
                "name": "Argentina"
            },
            {
                "name": "Armenia"
            },
            {
                "name": "Aruba"
            },
            {
                "name": "Australia"
            },
            {
                "name": "Austria"
            },
            {
                "name": "Azerbaijan"
            },
            {
                "name": "Bahamas"
            },
            {
                "name": "Bahrain"
            },
            {
                "name": "Bangladesh"
            },
            {
                "name": "Belarus"
            },
            {
                "name": "Belgium"
            },
            {
                "name": "Belize"
            },
            {
                "name": "Benin"
            },
            {
                "name": "Bermuda"
            },
            {
                "name": "Bhutan"
            },
            {
                "name": "Bolivia"
            },
            {
                "name": "Bosnia and Herzegovina"
            },
            {
                "name": "Botswana"
            },
            {
                "name": "Bouvet Island"
            },
            {
                "name": "Brazil"
            },
            {
                "name": "British Indian Ocean Territory"
            },
            {
                "name": "Brunei Darussalam"
            },
            {
                "name": "Bulgaria"
            },
            {
                "name": "Burkina Faso"
            },
            {
                "name": "Burundi"
            }
        ]
    })

    await prisma.genres.createMany({
        data: [
            {
                "name": "Action"
            },
            {
                "name": "Adventure"
            },
            {
                "name": "Animation"
            },
            {
                "name": "Comedy"
            },
            {
                "name": "Crime"
            },
            {
                "name": "Documentary"
            },
            {
                "name": "Experimental"
            },
            {
                "name": "Fantasy"
            },
            {
                "name": "Musical"
            },
            {
                "name": "Romance"
            },
            {
                "name": "Sci-Fi"
            },
            {
                "name": "Thriller"
            },
            {
                "name": "Western"
            }         
            
        ]
    })
    
}

main()
    .then(()=>{
        console.log("Registros realizados com sucesso");
        
    })
    .catch(e =>{
        console.error(e);
        process.exit(1)
        
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    })