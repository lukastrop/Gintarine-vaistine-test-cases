## Automation tests for www.gintarine.lt

1. Shopping cart product quantity limit notification test: 
    - Click "add to cart" button x5 times;

   Expected result: Notification warning should  be visible.
   
    - Change the quantity of item to "8";
    - Click "add to cart" button;
   
    Expected result: Notification warning should  be visible.

   <sub> *Wait functions are implemented in tests for animations to finish </sub>
   
2. Login positive test:
    - Enter email "kebabs@maildrop.cc" to "email" input;
    - Enter password "kebabs1" to password input ;
    - Click "Login" button;

   Expected result: The logged in username should be the same as input email.


3. Product description , price and image visibility test:
    - Open  OTC product page;

   Expected result: Image, description and price should be visible. *If product is OTC- info label should also be visible.

4. Responsiveness breakpoint test:
    - Open page with a viewport of "iphone 6";

   Expected result: The product list on mobile viewport should contain 2 columns.
    <sub> *A function to get CSS attribute value is used to get column information </sub>

5. Search option test:
    - Input "elevit" to search field;
    - Press "Enter";

   Expected result: product that was input to search field should be visible in results.


