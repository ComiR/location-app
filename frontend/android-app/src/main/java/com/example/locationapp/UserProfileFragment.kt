package com.example.locationapp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import kotlinx.android.synthetic.main.fragment_user_profile.*

class UserProfileFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_user_profile, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Assuming you have a User data class and a method to get the current user
        val user = getCurrentUser()

        usernameTextView.text = user.username
        reputationTextView.text = "Reputation: ${user.reputation}"
        pointsTextView.text = "Points: ${user.points}"
    }

    private fun getCurrentUser(): User {
        // Replace this with your actual implementation to get the current user
        return User("testuser", 100, 200)
    }

    data class User(val username: String, val reputation: Int, val points: Int)
}
