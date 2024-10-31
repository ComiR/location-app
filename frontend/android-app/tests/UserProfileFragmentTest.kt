package com.example.locationapp

import androidx.fragment.app.testing.launchFragmentInContainer
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*

import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class UserProfileFragmentTest {

    @Test
    fun testUserProfileDisplay() {
        // Launch the UserProfileFragment
        val scenario = launchFragmentInContainer<UserProfileFragment>()

        // Check if the username is displayed correctly
        onView(withId(R.id.usernameTextView))
            .check(matches(withText("testuser")))

        // Check if the reputation is displayed correctly
        onView(withId(R.id.reputationTextView))
            .check(matches(withText("Reputation: 100")))

        // Check if the points are displayed correctly
        onView(withId(R.id.pointsTextView))
            .check(matches(withText("Points: 200")))
    }
}
