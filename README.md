Reflection:

In this project, I have used Javascript functions, event handlers, loops, objects, arrays and more to create an idle / cookie-clicker style game.

By far the biggest challenge I came across when working on this game was getting local storage implemented properly, but thanks to Craig and Frankie's help, I was able to find a way to both save to and pull from local storage without anything getting in the way. The initial problem I was having was that, on my localhost, data was saving and being restored absolutely fine, but when testing on github, local storage was seemingly non existent.

I fetched data from Joe's provided API, and then used dot notation to manually edit the names. I did spend a few minutes trying to work out a function to do this more efficiently, which I am sure I could've done, but like with many things in this code, for an unclear reason when I attempted to do that, everything broke. Therefore, I just stuck to the simple method, as it wasn't anything I'd need to do again after.

One interesting thing I noticed early on when pushing the API data to my own array:
thanks to console.logging everything, I noticed that the API data had been pushed AS an array into my array, meaning that in order to access the right data, I would have to declare two index numbers in my code (arrayName[0][i]). This can be seen in my loop function, and was a fun little mental logic exercise to get things started.

Styling was nice and simple this time around, with a lot of things just being centered, requiring only flex and a few positioning adjustments. I did make a media query for a mobile screen, but as screen sizes vary so much, it was not functional on some devices.

With more time, I would like to add audio feedback upon clicking certain elements.

Overall, I actually had a lot of fun building this project! It really solidified my learning with Javascript, and it was really nice to see that even after spending week two feeling really daunted by JS as a whole, this time around it was the first thing I wanted to jump into and thoroughly enjoyed the whole process of slowly building up a function until it becomes a cascading cavalcade of sub-functions. I have even started using JS in my free time to build little things like a shopping list writer, and look forward to using my new understanding of local storage within such projects. I feel much better about this assignment than my last submission, so I'll be going into the holiday in good spirits! I hope whoever is marking this can say the same.

Merry Christmas, happy new year and **dog bless**
