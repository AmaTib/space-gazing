![Screenshot 2024-12-19 121828](https://github.com/user-attachments/assets/77826b98-8b21-479f-9103-f19c6b00d218)

## SpaceGazing
SpaceGazing is a web application where you can explore mesmerizing space photos
from NASA. Each day brings a new picture, and you can search to see what image was
featured on a specific date. Take the opportunity to read the image info and expand
your knowledge of the cosmos. But it does not end there, create personalized
collections of your favorite images, and enjoy creating your own gallery of the milky
way and beyond. The universe is the limit!


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Purpose
In all the seriousness the world offers in this day and time, it is important to get
a break and just let your brain wander somewhere else for a moment. This web
application offers the user an opportunity to delve into something that has pure
recreational value. The fact that you can also learn something along the way is just a
bonus, making the experience both enjoyable and meaningful.

## Goal
The goal of this project is a visually appealing web
application that can be used on either phone, tablet, or computers. For the user on the
way to work scrolling on their phone. For someone taking a break from answering
emails on their computer. Or even for the teacher asking their students to find the
most interesting fact about space using this website on a tablet.

The people using this service can be of any age, but with a common interest in space.
It is easy to use and has a clear purpose. What keeps users coming back is the chance
to discover a fresh, unexpected picture every day, something new and unknown that
draws them to return and see what each day has to offer.

## Function analysis & technical breakdown
Base functionality of the web app:
On the home page a new picture will be displayed every day along with information
about the picture. Users can navigate through previous or future dates using arrows,
or search for a specific date. You can also “like” a picture, which saves it to local
storage. From the homepage the user can navigate to either the about page or the
“saved images” page. In the “saved images” page the data is retrieved from local
storage, and all “liked” pictures are displayed. Clicking on a picture (in the saved
images page) shows additional information, such as image text, and provides options
to delete it or save it to a collection. In the “saved images” page the user can navigate
to the collections page to view or create new collections if none exist.

## Flowchart

![Screenshot 2024-12-19 121232](https://github.com/user-attachments/assets/4cb0f200-06ea-4cab-b31a-7352187b656e)


## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

