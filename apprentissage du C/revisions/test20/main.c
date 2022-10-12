#include <stdio.h>
#include <stdlib.h>

int i,j,nbr;
float somme, moyenne;
float tab[30];

int main()
{
    printf("Entrz le nombre d'elements dans le tableau\n");
    scanf("%d",&nbr);
    printf("entrez les elements du tableau:\n");

    for(i=0;i<nbr;++i)
    {
        printf("Entrer le nombre %d:",i+1);
        scanf("%f",&tab[i]);
    }
    somme=0;
    for(i=0; i<nbr; i++)
        somme=somme + tab[i];
        printf("la somme= %3.3f \n", somme);
        moyenne = somme/nbr;
        printf("la moyenne = %3.3f \n", moyenne);
        for(i=1;i<nbr; ++i)
        {
            if(tab[0]>tab[i])
            tab[0] = tab[i];
        }
        printf("Le plus petit element est %3.3f \n", tab[0]);

        for(i=1;i<nbr; ++i)
        {
            if(tab[0]<tab[i])
            tab[0] = tab[i];
        }
        printf("Le plus grand element est %3.3f \n", tab[0]);
    return (0);
}
