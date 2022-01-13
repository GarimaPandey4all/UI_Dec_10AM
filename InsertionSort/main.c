#include <stdio.h>
#include <stdlib.h>

void insertionSort(int arr[], int n)
{
    int i, j, temp;

    for(i = 1; i < n; i++)
    {
        temp = arr[i]; // 3
        j = i - 1; // 0

        while(j >= 0 && arr[j] > temp) // 10 > 3
        {
            arr[j + 1] = arr[j];
            j = j - 1; // 0 - 1 = -1
        }

        arr[j + 1] = temp;

    }
}

int main()
{
    int arr[] = {10, 3, 7, 5, 2};
    int i;

    insertionSort(arr, 5);

    printf("Sorted Array:\n");
    for(i = 0; i < 5; i++)
    {
        printf("%d  ", arr[i]);
    }

    return 0;
}
