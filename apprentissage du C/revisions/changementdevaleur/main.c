#include <stdio.h>
#include <stdlib.h>


int a=2,b=3,c;
int main()
{
    printf("j'affiche APRES l'echange de valeur :\n");
    printf("\t a: %d\n", a);
    printf("\t b: %d\n", b);
    printf("j'affiche APRES l'echange de valeur :\n");
//  D4ABORD JE FAIS L'OPERATION d'ECHANGE DE VALEUR
    c=a, a=b, b=c;
    printf("\t a: %d\n", a);
    printf("\t b: %d\n", b);
    return 0;
}
