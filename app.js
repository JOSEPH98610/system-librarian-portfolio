// ================= MOBILE MENU TOGGLE =================
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');
const closeBtn = document.querySelector('#close');

if (icon) {
  icon.addEventListener('click', () => {
    menu.classList.toggle('menu_holder_display');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu_holder_display');
  });
}

// Smooth close menu when link is clicked
const menuLinks = document.querySelectorAll('.menu_links a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu_holder_display');
  });
});

// ================= PROJECT DATA =================
const data = [
  {
    id: '1',
    img: './assets/main/projectdetails.jpg',
    deskimg: './assets/main/port.jpg',
    desktech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    mobiletech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    live_version: 'https://svitalis123.github.io/portfolio/app',
    source_link: 'https://github.com/svitalis123/portfolio',
    head: 'Keeping track of hundreds of components',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
  },
  // Add other projects here as needed
];

// ================= PROJECT DETAILS MODAL =================
function getId(id) {
  if (window.innerWidth > 920) {
    // Desktop modal
    const challdesk = (str) => {
      const closebtn2 = document.getElementById(`${str}`);
      closebtn2.addEventListener('click', () => {
        const divDetails2 = document.querySelector('#project1amend1desc');
        divDetails2.classList.remove('details_ammenddescreverse');
      });
    };

    data.forEach((item) => {
      if (id === item.id) {
        const div = document.querySelector('#project1amend1desc');
        div.classList.toggle('details_ammenddescreverse');

        const divContent = document.querySelector('#project1amend1desc2');
        divContent.innerHTML = `
          <img src="${item.deskimg}" style="height:616px; margin-top:78px; width:872px;" alt="project image"/>
          <div id="${item.id}dis" class="closexl" style="position:absolute; top:2%; right:5%;">
            <i class="fa fa-close" style="padding:12px; color:#000; font-size:xx-large;"></i>
          </div>
          <div style="display:flex;">
            <h2 style="font-family:'Inter',sans-serif; font-size:32px; font-weight:700; line-height:44px; color:#172b4d; padding:12px;">${item.head}</h2>
            <div style="display:flex; gap:10px; padding:12px;">
              <a href="${item.live_version}" target="_blank" class="javabtn" style="padding:10px; text-decoration:none; color:#fff; font-size:15px; line-height:20px; font-weight:600; background-color:#36b37f; height:48px; border-radius:5px; display:flex; justify-content:center; align-items:center;">See live <i class="fa fa-arrow-right" style="padding:12px;"></i></a>
              <a href="${item.source_link}" target="_blank" class="javabtn" style="padding:10px; text-decoration:none; color:#fff; font-size:15px; line-height:20px; font-weight:600; background-color:#36b37f; height:48px; border-radius:5px; display:flex; justify-content:center; align-items:center;">See Source <i class="fa fa-github" style="padding:12px;"></i></a>
            </div>
          </div>
          <ul style="list-style:none; margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
            ${item.desktech.map((tech) => `<li style="padding:8px 12px; background:#ebf0ee; border-radius:5px; color:#3a4a42; font-size:12px; line-height:16px; font-weight:600;">${tech}</li>`).join('')}
          </ul>
          <p style="width:876px; height:313px; color:#344563; font-size:16px; line-height:30px; font-weight:400; margin-bottom:16px;">${item.para}</p>
        `;
        challdesk(`${item.id}dis`);
      }
    });
  } else {
    // Mobile modal
    const chall = (str) => {
      const closebtn = document.getElementById(`${str}`);
      closebtn.addEventListener('click', () => {
        const divDetails = document.querySelector('#project1amend1');
        divDetails.classList.remove('detailsssx');
      });
    };

    data.forEach((item) => {
      if (id === item.id) {
        const div = document.querySelector('#project1amend1');
        div.classList.toggle('detailsssx');

        div.innerHTML = `
          <img src="${item.img}" style="height:220px; width:311px;" alt="project image"/>
          <div id="${item.id}" class="closexs" style="position:absolute; top:1px; right:5px;">
            <i class="fa fa-close" style="padding:12px; color:white; font-size:xx-large;"></i>
          </div>
          <h2 style="font-family:'Inter',sans-serif; font-size:32px; font-weight:600; line-height:44px; color:#172b4d; padding:12px;">${item.head}</h2>
          <ul style="list-style:none; margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
            ${item.mobiletech.map((tech) => `<li style="padding:8px 12px; background:#ebf0ee; border-radius:5px; color:#3a4a42; font-size:12px; line-height:16px; font-weight:600;">${tech}</li>`).join('')}
          </ul>
          <p style="width:311px; height:313px; color:#344563; font-size:16px; line-height:24px; font-weight:400; margin-bottom:16px;">${item.para}</p>
          <div style="display:flex; flex-wrap:wrap; gap:12px;">
            <a href="${item.live_version}" target="_blank" style="padding:10px; text-decoration:none; color:#fff; font-size:17px; font-weight:500; background-color:#36b37f; height:48px; border-radius:5px; display:flex; justify-content:center; align-items:center;">See live <i class="fa fa-arrow-right" style="padding:12px;"></i></a>
            <a href="${item.source_link}" target="_blank" style="padding:10px; text-decoration:none; color:#fff; font-size:17px; font-weight:500; background-color:#36b37f; height:48px; border-radius:5px; display:flex; justify-content:center; align-items:center;">See Source <i class="fa fa-github" style="padding:12px;"></i></a>
          </div>
        `;
        chall(item.id);
      }
    });
  }
}
getId();

// ================= FORM HANDLING =================
const storagedata = [];
const form = document.getElementById('form');
const errorDisplay = document.getElementById('error');

const nameInput = document.getElementById('form_name');
const emailInput = document.getElementById('form_email');
const subjectInput = document.getElementById('form_subject');
const messageInput = document.getElementById('form_message');

function validateForm() {
  errorDisplay.textContent = '';

  if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
    errorDisplay.textContent = 'Name must be at least 2 characters.';
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
    errorDisplay.textContent = 'Please enter a valid email.';
    return false;
  }

  if (!subjectInput.value.trim() || subjectInput.value.trim().length < 2) {
    errorDisplay.textContent = 'Subject must be at least 2 characters.';
    return false;
  }

  if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
    errorDisplay.textContent = 'Message must be at least 10 characters.';
    return false;
  }

  return true;
}

function saveFormData() {
  const dataObj = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    subject: subjectInput.value.trim(),
    comment: messageInput.value.trim()
  };
  storagedata.unshift(dataObj);
  localStorage.setItem('formdata', JSON.stringify(storagedata));
}

function loadFormData() {
  const saved = localStorage.getItem('formdata');
  if (saved) {
    const receive = JSON.parse(saved);
    if (receive && receive.length > 0) {
      nameInput.value = receive[0].name || '';
      emailInput.value = receive[0].email || '';
      subjectInput.value = receive[0].subject || '';
      messageInput.value = receive[0].comment || '';
    }
  }
}

// Save on input
if (form) {
  form.addEventListener('input', () => {
    if (validateForm()) saveFormData();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return false;

    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        showMessage("Message sent successfully!", "success");
        form.reset();
      } else {
        showMessage("Oops! There was a problem sending your message.", "error");
      }
    })
    .catch(() => {
      showMessage("Oops! There was a problem sending your message.", "error");
    });
  });

  // Clear on reload
  window.addEventListener('beforeunload', () => form.reset());
}

// ================= INLINE MESSAGE =================

const messageSpan = document.getElementById('form_message_status');

function showMessage(text, type) {
  messageSpan.textContent = text;
  messageSpan.style.display = "block";
  messageSpan.style.color = type === "success" ? "#036d38" : "#ff0000"; // green for success, red for error
  messageSpan.style.backgroundColor = type === "success" ? "#d4f5e3" : "#ffe3e3"; // light green or red
  messageSpan.style.opacity = 0;

  // Fade-in
  let opacity = 0;
  const fadeIn = setInterval(() => {
    opacity += 0.05;
    messageSpan.style.opacity = opacity;
    if (opacity >= 1) clearInterval(fadeIn);
  }, 20);

  // Fade-out after 4 seconds
  setTimeout(() => {
    let fadeOutOpacity = 1;
    const fadeOut = setInterval(() => {
      fadeOutOpacity -= 0.05;
      messageSpan.style.opacity = fadeOutOpacity;
      if (fadeOutOpacity <= 0) {
        clearInterval(fadeOut);
        messageSpan.style.display = "none";
        messageSpan.textContent = "";
      }
    }, 20);
  }, 4000);
}

// Display formatted date in the desktop nav
function formatDateWithSuffix(day) {
  if (day > 3 && day < 21) return day + 'th'; // 4th–20th
  switch (day % 10) {
    case 1: return day + 'st';
    case 2: return day + 'nd';
    case 3: return day + 'rd';
    default: return day + 'th';
  }
}

function updateNavDate() {
  const now = new Date();
  const day = formatDateWithSuffix(now.getDate());
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const dateElement = document.getElementById('nav_date');
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }
}

// Run on page load
window.addEventListener('DOMContentLoaded', updateNavDate);
