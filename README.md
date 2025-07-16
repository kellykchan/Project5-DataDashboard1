# Web Development Project 5 - *Rick and Morty Characters - Data Dashboard*

Submitted by: **Kelly Chan**

This web app: **lets you easily browse through all the Rick and Morty characters. You can search by name, filter by status or species, and even pick how many episodes a character shows up in. It also shows some quick stats like how many characters there are and status of those characters. Plus, you get to see their pictures and basic info in a simple, clean layout. It’s a fun way to check out your favorite (or weirdest) characters from the show!**

Time spent: **1.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Total Characters, Status of Characters, and Number of Species*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown, and a slider
- [X] The user can enter specific bounds for filter values

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Adobe Express

## Notes

One of the tricky parts was fetching all the characters from the API since the data comes in pages. I had to set up a loop to keep requesting until I got everything, which took some trial and error. Also, making the filters work together smoothly was a bit challenging, making sure the search, status, species, and episode count all combined properly without bugs. Lastly, styling the dropdowns and inputs to look good took some trial and error, especially to get the spacing and hover effects just right.

## License

    Copyright 2025 Kelly Chan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
