export interface MenuCategory {
  id: number;
  name: string;
  description: string | null;
  displayOrder: number;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  available: boolean;
  featured: boolean;
  categoryId: number;
  categoryName: string;
}

export const categories: MenuCategory[] = [
  {
    "id": 11,
    "name": "Dips & Sauces",
    "description": "House-made dips and sauces for your pretzels",
    "displayOrder": 0
  },
  {
    "id": 6,
    "name": "Classic Pretzels",
    "description": null,
    "displayOrder": 1
  },
  {
    "id": 7,
    "name": "Sweet Pretzels",
    "description": null,
    "displayOrder": 2
  },
  {
    "id": 8,
    "name": "Savory Pretzels",
    "description": null,
    "displayOrder": 3
  },
  {
    "id": 10,
    "name": "Pretzel Dogs",
    "description": null,
    "displayOrder": 5
  }
];

export const menuItems: MenuItem[] = [
  {
    "id": 55,
    "name": "Sweet Glaze Pretzel",
    "description": "Classic soft pretzel finished with a warm, shiny sweet glaze",
    "price": 5,
    "imageUrl": "/images/menu/sweet-glaze-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 56,
    "name": "Cinnamon Sugar Pretzel",
    "description": "Soft pretzel rolled in cinnamon sugar and drizzled with icing. Comes with cream cheese dip",
    "price": 5.5,
    "imageUrl": "/images/menu/cinnamon-sugar-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 57,
    "name": "Chocolate Pretzel",
    "description": "Soft pretzel draped in rich milk chocolate",
    "price": 5.5,
    "imageUrl": "/images/menu/chocolate-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 58,
    "name": "White Chocolate Pretzel",
    "description": "Soft pretzel coated in creamy white chocolate",
    "price": 5.5,
    "imageUrl": "/images/menu/white-chocolate-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 59,
    "name": "Fudge Pretzel",
    "description": "Thick dark fudge spread over a warm soft pretzel — dense, rich, and dangerously good",
    "price": 6,
    "imageUrl": "/images/menu/fudge-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 60,
    "name": "M&Ms Pretzel",
    "description": "Sweet glaze base topped with a generous scatter of colorful M&Ms",
    "price": 6,
    "imageUrl": "/images/menu/mms-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 61,
    "name": "Caramel Dip Pretzel",
    "description": "Classic soft pretzel served with a warm house caramel dipping sauce",
    "price": 5.5,
    "imageUrl": "/images/menu/caramel-dip-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 62,
    "name": "Mint Chip Pretzel",
    "description": "White chocolate base with mint chip pieces — cool, sweet, and a little unexpected",
    "price": 6,
    "imageUrl": "/images/menu/mint-chip-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 63,
    "name": "Chocolate Chip Pretzel",
    "description": "Sweet glaze topped with a heavy hand of semi-sweet chocolate chips",
    "price": 5.5,
    "imageUrl": "/images/menu/chocolate-chip-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 64,
    "name": "Marshmallow Pretzel",
    "description": "Warm pretzel covered in toasted marshmallow fluff",
    "price": 5.5,
    "imageUrl": "/images/menu/marshmallow-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 65,
    "name": "Nuts Pretzel",
    "description": "Sweet glaze pretzel topped with a mix of chopped roasted nuts",
    "price": 5.5,
    "imageUrl": "/images/menu/nuts-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 66,
    "name": "Toffee Nuts Pretzel",
    "description": "Caramel glaze loaded with buttery toffee-coated nuts — sweet, salty, crunchy",
    "price": 6.5,
    "imageUrl": "/images/menu/toffee-nuts-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 67,
    "name": "Coconut Pretzel",
    "description": "Sweet glaze pretzel rolled in toasted shredded coconut",
    "price": 5.5,
    "imageUrl": "/images/menu/coconut-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 68,
    "name": "Peanut Butter Drizzle Pretzel",
    "description": "Warm soft pretzel drizzled generously with creamy peanut butter",
    "price": 5.5,
    "imageUrl": "/images/menu/peanut-butter-drizzle-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 69,
    "name": "Sprinkles Pretzel",
    "description": "Sweet glaze pretzel buried under a rainbow avalanche of sprinkles",
    "price": 5,
    "imageUrl": "/images/menu/sprinkles-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 70,
    "name": "Cotton Candy Bits Pretzel",
    "description": "White chocolate base topped with fluffy cotton candy bits — act fast before they melt",
    "price": 6,
    "imageUrl": "/images/menu/cotton-candy-bits-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 71,
    "name": "Oreo Pretzel",
    "description": "Sweet glaze pretzel covered in crushed Oreo pieces",
    "price": 6,
    "imageUrl": "/images/menu/oreo-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 72,
    "name": "Powdered Sugar Pretzel",
    "description": "Soft pretzel dusted generously in classic powdered sugar",
    "price": 4.5,
    "imageUrl": "/images/menu/powdered-sugar-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 73,
    "name": "The Works Pretzel",
    "description": "Every sweet topping we have, all on one pretzel. Not for the faint of heart",
    "price": 9,
    "imageUrl": "/images/menu/the-works-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 7,
    "categoryName": "Sweet Pretzels"
  },
  {
    "id": 74,
    "name": "Traditional Soft Pretzel",
    "description": "Hand-twisted Bavarian-style soft pretzel with coarse salt and a warm butter glaze",
    "price": 4.5,
    "imageUrl": "/images/menu/traditional-soft-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 6,
    "categoryName": "Classic Pretzels"
  },
  {
    "id": 75,
    "name": "Whole Wheat Pretzel",
    "description": "Earthy whole wheat dough with extra coarse salt and a deep mahogany crust",
    "price": 4.5,
    "imageUrl": "/images/menu/whole-wheat-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 6,
    "categoryName": "Classic Pretzels"
  },
  {
    "id": 76,
    "name": "Traditional Bites",
    "description": "Twelve bite-sized classic soft pretzel nuggets with coarse salt, served with house cheese dip",
    "price": 7,
    "imageUrl": "/images/menu/traditional-bites.jpg",
    "available": true,
    "featured": false,
    "categoryId": 6,
    "categoryName": "Classic Pretzels"
  },
  {
    "id": 77,
    "name": "Garlic Parmesan",
    "description": "Roasted garlic paste and shaved parmesan melted over a classic soft pretzel",
    "price": 5.5,
    "imageUrl": "/images/menu/garlic-parmesan.jpg",
    "available": true,
    "featured": true,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 78,
    "name": "Everything Pretzel",
    "description": "Topped with house everything seasoning — sesame, poppy, onion, garlic, and coarse salt",
    "price": 5,
    "imageUrl": "/images/menu/everything-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 79,
    "name": "Smoky Ranch",
    "description": "Soft pretzel brushed with smoky ranch butter and finished with a dusting of ranch seasoning",
    "price": 5.5,
    "imageUrl": "/images/menu/smoky-ranch.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 80,
    "name": "Jalapeño Cheddar",
    "description": "Sharp cheddar and pickled jalapeño baked right into the dough. Stanley's personal favorite",
    "price": 6,
    "imageUrl": "/images/menu/jalapeno-cheddar.jpg",
    "available": true,
    "featured": true,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 81,
    "name": "Chili Lime",
    "description": "Zesty chili-lime seasoning on a warm soft pretzel — bright, spicy, and totally addictive",
    "price": 5.5,
    "imageUrl": "/images/menu/chili-lime.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 82,
    "name": "Sour Cream & Onion",
    "description": "Classic sour cream and onion seasoning over a buttered soft pretzel",
    "price": 5,
    "imageUrl": "/images/menu/sour-cream-and-onion.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 83,
    "name": "Cheddar Bacon",
    "description": "Melted cheddar and crispy bacon bits baked on top — the one Kevin orders twice",
    "price": 6.5,
    "imageUrl": "/images/menu/cheddar-bacon.jpg",
    "available": true,
    "featured": true,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 84,
    "name": "Buffalo Wing",
    "description": "House buffalo sauce and a blue cheese drizzle on a warm soft pretzel. Bring napkins",
    "price": 6,
    "imageUrl": "/images/menu/buffalo-wing.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 85,
    "name": "Spinach & Feta",
    "description": "Wilted spinach and tangy feta folded into every twist",
    "price": 5.5,
    "imageUrl": "/images/menu/spinach-and-feta.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 86,
    "name": "Pepperoni",
    "description": "Loaded with pepperoni and a drizzle of marinara. Pizza night, pretzel style",
    "price": 6,
    "imageUrl": "/images/menu/pepperoni.jpg",
    "available": true,
    "featured": false,
    "categoryId": 8,
    "categoryName": "Savory Pretzels"
  },
  {
    "id": 87,
    "name": "Hot Dog Pretzel",
    "description": "All-beef frank wrapped snugly in soft pretzel dough, baked golden. A Pretzel Day staple",
    "price": 7,
    "imageUrl": "/images/menu/hot-dog-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 10,
    "categoryName": "Pretzel Dogs"
  },
  {
    "id": 88,
    "name": "Stadium Bratwurst Pretzel",
    "description": "Jumbo bratwurst in a soft pretzel wrap — stadium food, upgraded",
    "price": 8.5,
    "imageUrl": "/images/menu/stadium-bratwurst-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 10,
    "categoryName": "Pretzel Dogs"
  },
  {
    "id": 89,
    "name": "Cheddar Dog Pretzel",
    "description": "All-beef frank stuffed with melted cheddar, wrapped in pretzel dough. Fully loaded",
    "price": 8,
    "imageUrl": "/images/menu/cheddar-dog-pretzel.jpg",
    "available": true,
    "featured": true,
    "categoryId": 10,
    "categoryName": "Pretzel Dogs"
  },
  {
    "id": 90,
    "name": "Cheddar Bratwurst Pretzel",
    "description": "Cheddar-stuffed bratwurst in pretzel dough — rich, savory, and worth every bite",
    "price": 9,
    "imageUrl": "/images/menu/cheddar-bratwurst-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 10,
    "categoryName": "Pretzel Dogs"
  },
  {
    "id": 91,
    "name": "Regular Bratwurst Pretzel",
    "description": "Classic bratwurst in a soft pretzel wrap with whole-grain mustard on the side",
    "price": 8,
    "imageUrl": "/images/menu/regular-bratwurst-pretzel.jpg",
    "available": true,
    "featured": false,
    "categoryId": 10,
    "categoryName": "Pretzel Dogs"
  },
  {
    "id": 92,
    "name": "Yellow Mustard",
    "description": "Classic yellow mustard. The one. The only.",
    "price": 1.5,
    "imageUrl": "/images/menu/yellow-mustard.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 93,
    "name": "Honey Mustard",
    "description": "Sweet and tangy house honey mustard — pairs perfectly with any classic or savory pretzel",
    "price": 1.5,
    "imageUrl": "/images/menu/honey-mustard.jpg",
    "available": true,
    "featured": true,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 94,
    "name": "Spicy Brown Mustard",
    "description": "A sharper, spicier mustard with some real kick. William's table staple",
    "price": 1.5,
    "imageUrl": "/images/menu/spicy-brown-mustard.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 95,
    "name": "House Cheese Sauce",
    "description": "Warm, creamy cheddar cheese sauce made fresh daily. The crowd favorite",
    "price": 2.5,
    "imageUrl": "/images/menu/house-cheese-sauce.jpg",
    "available": true,
    "featured": true,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 96,
    "name": "Beer Cheese",
    "description": "House cheese sauce spiked with craft beer — rich, malty, and dangerously good",
    "price": 3,
    "imageUrl": "/images/menu/beer-cheese.jpg",
    "available": true,
    "featured": true,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 97,
    "name": "Cream Cheese Dip",
    "description": "Smooth whipped cream cheese with a hint of sea salt. Essential with the cinnamon sugar pretzel",
    "price": 2,
    "imageUrl": "/images/menu/cream-cheese-dip.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 98,
    "name": "Ranch",
    "description": "Cool and herby house ranch dip. Goes with everything, and yes, we mean everything",
    "price": 1.5,
    "imageUrl": "/images/menu/ranch.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 99,
    "name": "Caramel Sauce",
    "description": "Warm buttery caramel for dipping sweet pretzels. Also acceptable on the savory ones",
    "price": 2,
    "imageUrl": "/images/menu/caramel-sauce.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 100,
    "name": "Marinara",
    "description": "House tomato marinara — bright, herby, and the only right way to eat the pepperoni pretzel",
    "price": 1.5,
    "imageUrl": "/images/menu/marinara.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  },
  {
    "id": 101,
    "name": "Buffalo Sauce",
    "description": "House buffalo sauce with a side of blue cheese crumble. Heat level: respectfully serious",
    "price": 2,
    "imageUrl": "/images/menu/buffalo-sauce.jpg",
    "available": true,
    "featured": false,
    "categoryId": 11,
    "categoryName": "Dips & Sauces"
  }
];

export const getMenuItem = (id: number): MenuItem | undefined =>
  menuItems.find((item) => item.id === id);

export const getMenuItemsByCategory = (categoryId?: number | null): MenuItem[] =>
  categoryId == null ? menuItems : menuItems.filter((item) => item.categoryId === categoryId);

export const getFeaturedMenuItems = (): MenuItem[] =>
  menuItems.filter((item) => item.featured);

export const getMenuSummary = () => ({
  totalItems: menuItems.length,
  categories: categories.map((category) => ({
    ...category,
    itemCount: menuItems.filter((item) => item.categoryId === category.id).length,
  })),
});
