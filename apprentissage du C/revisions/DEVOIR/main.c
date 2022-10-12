#include <stdio.h>
#include <stdlib.h>

int main()
{
    float plusgrand,pluspetit,nbr,compteur,somme=0,moyenne=0;

    printf("La saisie de zero [0] arrete la serie\n");

    printf("entrer entier : ");
    scanf("%f", &nbr);

    pluspetit=nbr;
    plusgrand=nbr;

    while(nbr!=0){
        if(plusgrand<nbr)
        plusgrand=nbr;
    else
        if(pluspetit>nbr)
            pluspetit=nbr;
    somme=somme+nbr;

    printf("entrer entier : ");
    scanf("%f", &nbr);
    compteur=compteur+1;
    moyenne=somme/compteur;
    }



    printf("le plus petit est : %f\n",pluspetit);
    printf("le plus grand est : %f\n", plusgrand);

    printf("\n");

    printf("nombre de chiffres entree : %f", compteur);

     printf("\n");

    printf("la somme est : %f\n", somme);
    printf("la moyenne est : %f", moyenne);
    return 0;
}
