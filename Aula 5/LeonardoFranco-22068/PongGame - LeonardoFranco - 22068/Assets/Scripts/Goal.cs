using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Goal : MonoBehaviour
{
   void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.gameObject.CompareTag("ballTag"))
        {
            GameObject.Find("GameManagerObj").GetComponent<Manager>().Score();
        }
    }
}
