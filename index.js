const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

//DOMContentLoaded - Loads everything first
document.addEventListener('DOMContentLoaded', function () {
  // Get container element where you want to render the content
  const mainContainer = document.querySelector('.main-image-container');

  // Loop through the array of objects
  posts.forEach((obj) => {
    // Create new element for each object
    const element = document.createElement('div');
    element.classList.add('content-container');

    // Set content for each element
    element.innerHTML = `
        <section class="poster-section">
          <img src="${obj.avatar}" class="poster-avatar" />
          <div class="poster-info">
            <h2 class="poster-name">${obj.name}</h2>
            <h3 class="poster-location">${obj.location}</h3>
          </div>
        </section>
        <section class="posted-image">
          <img class="main-image" src="${obj.post}" alt="posted image of ${obj.name}">
        </section>
        <section class="communication-icon-section">
          <div class="heart"><img src="images/icon-heart.png" alt="heart icon"></div>
          <div class="comment"><img src="images/icon-comment.png" alt="comment icon"></div>
          <div class="direct-message"><img src="images/icon-dm.png" alt="direct message icon"></div>
        </section>
        <section class="likes-comments">
          <h3 class="likes"><span class="likes-number" id="likes-number-${obj.username}">${obj.likes}</span> likes</h3>
          <h3 class="comments"><span class="commenter-name">${obj.username}</span> ${obj.comment}</h3>
        </section>
    `;

    // Append element to container
    mainContainer.appendChild(element);

    const likeButton = element.querySelector('.heart');
    const likePhoto = element.querySelector('.main-image');

    likeButton.addEventListener('click', function () {
      increaseLikes(element);
    });

    likePhoto.addEventListener('dblclick', function () {
      increaseLikes(element);
    });
  });
});

function increaseLikes(postElement) {
  const likesNumberEl = postElement.querySelector('.likes-number');
  let likesNumber = parseInt(likesNumberEl.textContent.replace(/,/g, ''));

  likesNumber += 1;

  likesNumberEl.textContent = likesNumber.toLocaleString();
}
