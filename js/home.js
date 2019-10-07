window.onload = function() {
    readFile('data/articles.json', function(articles) {
        console.log(articles);

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data ce trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article








        // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);

            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER








        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....





        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker





    });
}
