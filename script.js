function openTab(tabName) {
            var i, tabcontent;
            tabcontent = document.getElementsByClassName("tab");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
        }
    const fileinput = document.getElementById('fileinput');
  const photogallery = document.getElementById('photogallery');
  const title = document.getElementById('title');
  const photos = [];

  function uploadphoto() {
    const file = fileinput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageurl = e.target.result;
      const newphoto = document.createElement('img');
      newphoto.src = imageurl;
      newphoto.className='cir';
      const titleText = title.value;
      const titlepara = document.createElement('p');
      titlepara.textContent = titleText;
      truncateText(titlepara, 40); // Tronquer le texte du titre
      const photodiv = document.createElement('div');
      photodiv.classList.add('photodiv');
      const lemudiv = document.createElement('div');
      lemudiv.classList.add('lemu');
      const likebtn = document.createElement('button');
      likebtn.classList.add('like-btn');
      let likecount = 0;
      likebtn.innerHTML = `<span class="heart">❤️</span> ${likecount}`;
      likebtn.addEventListener('click', function() {
        likecount++;
        likebtn.innerHTML = `<span class="heart">❤️</span> ${likecount}`;
      });
      const viewbtn = document.createElement('button');
      viewbtn.classList.add('view-btn');
      viewbtn.innerHTML = '<span class="eye">️‍️</span>';
      const sharebtn = document.createElement('button');
      sharebtn.classList.add('share-btn');
      sharebtn.innerHTML = '<span class="arrow"></span> Partager';
      lemudiv.appendChild(likebtn);
      lemudiv.appendChild(viewbtn);
      lemudiv.appendChild(sharebtn);
      photodiv.appendChild(titlepara);
      photodiv.appendChild(newphoto);
      photodiv.appendChild(lemudiv);
      photogallery.insertBefore(photodiv, photogallery.firstChild);
      photogallery.insertBefore(document.createElement('hr'),photogallery.firstChild);
      photos.unshift({ photo: newphoto, menu: lemudiv });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function renderphotos() {
    photogallery.innerHTML = '';
    photos.forEach(item => {
      const photodiv = document.createElement('div');
      photodiv.classList.add('photodiv');
      const lemudiv = item.menu;
      const image = item.photo;
      const titlepara = document.createElement('p');
      titlepara.textContent = item.photo.alt; // Utiliser l'attribut alt de l'image pour le titre
      truncateText(titlepara, 40); // Tronquer le texte du titre
      photodiv.appendChild(titlepara);
      photodiv.appendChild(image);
      photodiv.appendChild(lemudiv);
      photogallery.appendChild(photodiv);
    });
  }

  function truncateText(element, maxLength) {
  if (element.innerHTML.length > maxLength) {
    element.dataset.fullText = element.innerHTML; // Stocker le texte complet
    element.innerHTML = element.innerHTML.substring(0, maxLength) + '... <a href="#" onclick="return showMore(this)">Lire plus</a>';
  }
}

function showMore(element) {
  var parent = element.parentNode;
  parent.innerHTML = parent.dataset.fullText; // Afficher le texte complet
  return false;
}

function showLess(element) {
  var parent = element.parentNode;
  parent.innerHTML = parent.dataset.truncatedText;
  return false;
}
   document.getElementById('sendMessageButton').addEventListener('click', function() {
            window.location.href = 'https://www.facebook.com/profile.php?id=100091983017759'; // Remplacez 'votreProfil' par votre nom d'utilisateur ou votre ID Facebook
        });
  		// Définissez le mot de passe
		const motDePasse = "2610";
		
		// Ajoutez un écouteur d'événement au bouton "Voir"
		document.getElementById("voir").addEventListener("click", function() {
			// Demandez le mot de passe à l'utilisateur
			const password = prompt("Entrez le mot de passe pour accéder à la section protégée");
			
			// Vérifiez si le mot de passe est correct
			if (password === motDePasse) {
				// Affichez la section protégée
				document.getElementById("section-protegee").style.display = "block";
			} else {
				// Masquez la section protégée et affichez un message d'erreur
				document.getElementById("section-protegee").style.display = "none";
				alert("Mot de passe incorrect");
			}
		});
		        document.getElementById('download').addEventListener('click', function() {
      var image = document.getElementById('image');
      var downloadLink = document.createElement('a');
      downloadLink.href = image.src;
      downloadLink.download = 'nom_de_votre_image.jpg';
      downloadLink.click();
    });
  
  function searchFunction(event) {
            event.preventDefault(); // Empêcher la soumission du formulaire

            const formData = new FormData(document.getElementById('searchForm'));
            const query = formData.get('q').toLowerCase(); // Convertir la requête en minuscules pour la recherche sans distinction entre majuscules et minuscules

            // Récupérer la liste d'éléments à rechercher
            const items = document.querySelectorAll('#items li');

            // Filtrer les éléments en fonction de la requête
            items.forEach(item => {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(query)) {
                    item.style.display = 'block'; // Afficher l'élément si correspondance
                } else {
                    item.style.display = 'none'; // Masquer l'élément s'il n'y a pas de correspondance
                }
            });
        }
   document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = "681388871"; // Remplacez par votre numéro de téléphone au format international sans le signe "+" ni d'autres caractères spéciaux
    var message = "Bonjour, je suis intéressé par vos services."; // Message par défaut

    var whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
});


     