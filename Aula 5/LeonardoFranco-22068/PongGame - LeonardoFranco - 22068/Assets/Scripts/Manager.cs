using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Manager : MonoBehaviour
{
    [Header("Ball")]
    public GameObject ball;

    [Header("Score UI")]
    public GameObject scoreText;

    private int score = 0;

    public void Score()
    {
        score++;
        ball.GetComponent<BallMovement>().increaseSpeed();
        scoreText.GetComponent<TextMeshProUGUI>().text = score.ToString();
    }

    public void Reset()
    {
        score = 0;
        scoreText.GetComponent<TextMeshProUGUI>().text = score.ToString();
    }
}
