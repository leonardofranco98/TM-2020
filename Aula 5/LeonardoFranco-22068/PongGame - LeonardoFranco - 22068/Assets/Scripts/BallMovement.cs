using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallMovement : MonoBehaviour
{
    private Vector2 startPos;
    public Rigidbody2D rb;
    public float speed;

    // Start is called before the first frame update
    void Start()
    {
        startPos = transform.position;
        launch();
    }

    void launch()
    {
        float x = Random.Range(0, 2) == 0 ? 1 : -1;
        float y = Random.Range(0, 2) == 0 ? 1 : -1;
        rb.velocity = new Vector2(x * speed, y * speed);
    }

    public void increaseSpeed()
    {
        float x = rb.velocity[0] + (rb.velocity[0] > 0 ? 1 : -1);
        float y = rb.velocity[1] + (rb.velocity[1] > 0 ? 1 : -1);
        rb.velocity = new Vector2(x, y);
    }

    public void Reset()
    {
        rb.velocity = Vector2.zero;
        transform.position = startPos;
        launch();
    }
}
