# Code Challenge

## Getting Started

1. Run `docker compose up` on the root directory **(must have Docker and Docker Compose installed)**
2. Navigate `http://localhost:3000` on your web browser.
3. Pages available:
  - `/` Homepage - which displays the top rated products
  - `/search?keyword=Casual` Search page - redirects user everytime Search bar is used
  - `/categories?category=jewelry` Categories page - Groups products by categories
  - `/products/:id` Product page - Single product view


## Scenario

An entrepreneur has big plans for their idea and have determined that something custom needs to be built. The MVP however, is rather straightforward - a catalogue site.

Customers will search and browse the catalogue and submit an enquiry for products they want. The entrepreneur has done the market research
to validate the opportunity and they are in the process of getting creative work to nail the look and feel but really want to get started on the build. 
They have provided some acceptance criteria for the basic features

The entrepreneur is looking to you to give them a proof of concept that they can interact with to start firming up the vision for their idea. They are not too fussed with the specific product meta data
at this point so using [this Fake Store API](https://fakestoreapi.com/) is acceptable. But they have been down this road before with other developers and have specified 
they don't want a Proof of Concept that needs to be thrown away, they want something they know can grow and evolve with the vision.

## Expectations

This challenge is designed to build tension between the time-box and the amount of requirements you satisfy. But if you 
decide to drop certain requirements, please ensure you can justify the decision

1. Raise a Pull Request with your working solution
2. Make decisions to showcase your strengths
3. Time-box the effort to no more than 2-3 hours
4. Focus on producing the critical path
5. Use NodeJS for backend and ReactJS for frontend
6. If you choose to include infra, ensure it is compatible with AWS
7. Do not access the Fake Store API directly from the frontend
8. If your submission requires some setup, please detail this to make things easier for the reviewer

## Selection Criteria

* Solution Design
* Standard and Quality of the implementation

## Acceptance Criteria
### Home page
```
GIVEN I have chosen 5 products to be "top rated"
 WHEN I am viewing the home page
 THEN I see those 5 featured products
```

### Category Page
```
GIVEN my products are organised into categories
 WHEN I click on a category link
 THEN I see top rated products for that category
  AND I see additional products in that category 
```

### Search
```
GIVEN I am looking for a specific product
  AND I have entered a search term in the search bar
 WHEN I click the search button
 THEN I only see products that have text matching that search term
```

### Product Page
```
GIVEN I am browsing the products
  AND I want to see more details about a specific product
 WHEN I click on a product tile
 THEN I see the product details page
```

### Enquiry
```
GIVEN I am viewing a product
  AND I am interested in a product 
  AND I click on the Enquire button
  AND I complete the subsequent form with my contact details
 WHEN I submit the form
 THEN the sales inbox will receive an email
  AND the customer will see a "Thank you" message
```