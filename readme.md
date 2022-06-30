# Commandes pour modifier et ajouter uniquement son dossier

## Dans un dossier on initialise git :

```bash
git init
```

## on ajoute le projet à notre git

```bash
git remote add origin git@github.com:digifab-dev/projet-cda1-p1.git
```

## On dit à git que l'on souhaite préciser le dossier modifiable

```bash
git config core.sparseCheckout true
```

## Créer un fichier dans 'sparse-checkout' ( sans extensions ) le dossier .git/info/

**linux :**

```bash
nano .git/info/sparse-checkout
```

## dans le fichier sparse-checkout 

On ajoute uniquement le nom du dossier que l'on souhaite récupèrer

**ex :** git-master

## On récupère le dossier sur notre PC/Mac 


```bash
git pull --depth=1 origin main
```


# Pour envoyer vos modifications sur le git :

Depuis le dossier contenant le .git on ajoute toutes nos modifications : 

```bash
git add .
```

On prépare l'envoie de nos données en donnant un nom pour différencier ce dernier : 

```bash
git commit -m 'Mon premier commit'
```


On envoie enfin le tout :


```bash
git push
```