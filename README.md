# Mini CRM

### Objectifs
Créer un Mini-CRM (Customer Relation Management) afin de gérer vos relation avec les entreprises est ces salariées.
___
### Exercices

**Avant toute chose**

**Forker le repo github sur votre profil et puis cloner celui-ci**

Vérifier avec votre terminal si nodejs & npm sont bien installer. dans votre terminal :

   - node --version
   - npm --version

Et pour finir faire un `npm install` et `npm start` et rendez-vous sur l'adresse `http://localhost:9000`

#### Étape 1

Créer les classes et les interfaces pour chacune d'entre elle (un fichier par classe et par interface):
- Company :
    * name
    * website
    * employee
    * region
    * zipCode
- Employee :
    * first_name
    * last_name
    * email
    * phone
    * company
    * description

Exporter vos `Interfaces` pour pouvoir les utilisées dans vos `Classes`
Il faudra les exporter chaque `Classes` et `Interfaces`. 
Mettre en place vos accesseurs pour chacune de vos classes.

Quelques sources : 
- [Accesseur Typescript](https://www.typescriptlang.org/docs/handbook/classes.html#accessors)
- [Export - class, function, variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [Import - class, function, variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

#### Étape 2

Importer vos classes dans votre `main.ts` et instancier vos `Classe` avec quelques entreprises (`noukio`, `syno` ...) et ajouter des employées à ces entreprises.

Afficher les tout d'abord dans la console de votre navigateur, puis dans votre `section#app`.
#### Etape 3

Avec la library [fakerjs](https://github.com/marak/Faker.js/), générer 0 à 10 entreprise.

exemple :

```typescript
import faker from "faker"

for (let i = 0; i < faker.random.number({'min': 5, 'max': 10}); i++) {
    let clients: IClient[] = [];
    const company = new Company(faker.company.companyName(), faker.address.city(), faker.internet.url(), clients, faker.address.zipCode());
 }
```
Et afficher dans votre `section#app`.

#### Etape 4

Créer un formulaire d'ajouts d'employées.
Ce formulaire autant d'input que d'attributs de la classe `Employee`, de plus il faudra ajouter balise `select` qui listera toutes les entreprises pour y affecter l'employé.

#### Etape 5

Créer un formulaire d'ajouts d'entreprise.
