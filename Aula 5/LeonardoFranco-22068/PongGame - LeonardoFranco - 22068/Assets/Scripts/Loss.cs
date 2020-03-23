using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Loss : MonoBehaviour
{
    void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.gameObject.CompareTag("ballTag"))
        {
            GameObject.Find("GameManagerObj").GetComponent<Manager>().Reset();
            GameObject.Find("Ball").GetComponent<BallMovement>().Reset();
            GameObject.Find("Paddle").GetComponent<PlayerController>().Reset();
        }
    }
}
