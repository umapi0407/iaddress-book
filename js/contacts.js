let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function addContact() {
  contacts.push({
    id: Date.now(),
    name: name.value,
    phone: phone.value,
    email: email.value
  });
  localStorage.setItem("contacts", JSON.stringify(contacts));
  alert("Contact added");
}

function loadContacts() {
  const list = document.getElementById("contactList");
  if (!list) return;

  list.innerHTML = "";
  contacts.forEach(c => {
    list.innerHTML += `
      <tr class="border-t">
        <td class="p-2">${c.name}</td>
        <td>${c.phone}</td>
        <td>${c.email}</td>
        <td>
          <a href="edit-contact.html?id=${c.id}" class="text-blue-600">Edit</a>
          <button onclick="deleteContact(${c.id})" class="text-red-600 ml-2">Delete</button>
        </td>
      </tr>`;
  });
}

function deleteContact(id) {
  contacts = contacts.filter(c => c.id !== id);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  loadContacts();
}

loadContacts();
