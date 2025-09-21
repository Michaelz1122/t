'use client'

import { useEffect } from 'react'

interface AnalyticsEvent {
  event: string
  data?: Record<string, any>
  timestamp: number
}

export default function Analytics() {
  useEffect(() => {
    // Simple analytics tracking
    const trackEvent = (event: string, data?: Record<string, any>) => {
      const analyticsEvent: AnalyticsEvent = {
        event,
        data,
        timestamp: Date.now()
      }
      
      // Store events in localStorage for demo purposes
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]')
      events.push(analyticsEvent)
      
      // Keep only last 100 events
      if (events.length > 100) {
        events.shift()
      }
      
      localStorage.setItem('analytics_events', JSON.stringify(events))
      
      // In a real implementation, you would send this to your analytics service
      console.log('Analytics Event:', analyticsEvent)
    }

    // Track page view
    trackEvent('page_view', {
      path: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    })

    // Track user engagement
    const trackEngagement = () => {
      trackEvent('user_engagement', {
        scroll_depth: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
        time_on_page: Math.round((Date.now() - pageLoadTime) / 1000)
      })
    }

    // Track form submissions
    const trackFormSubmission = (e: Event) => {
      const form = e.target as HTMLFormElement
      trackEvent('form_submission', {
        form_id: form.id || 'unknown',
        form_action: form.action || 'unknown'
      })
    }

    // Track button clicks
    const trackButtonClick = (e: Event) => {
      const button = e.target as HTMLElement
      if (button.tagName === 'BUTTON' || button.closest('button')) {
        trackEvent('button_click', {
          button_text: button.textContent || 'unknown',
          button_id: button.id || 'unknown'
        })
      }
    }

    // Track lead magnet interactions
    const trackLeadMagnet = (e: Event) => {
      const element = e.target as HTMLElement
      if (element.closest('[data-lead-magnet]')) {
        trackEvent('lead_magnet_interaction', {
          magnet_type: element.getAttribute('data-lead-magnet') || 'unknown'
        })
      }
    }

    // Initialize tracking
    const pageLoadTime = Date.now()
    
    // Track scroll events (throttled)
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(trackEngagement, 100)
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('submit', trackFormSubmission)
    document.addEventListener('click', trackButtonClick)
    document.addEventListener('click', trackLeadMagnet)

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      trackEvent('page_leave', {
        time_on_page: Math.round((Date.now() - pageLoadTime) / 1000)
      })
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('submit', trackFormSubmission)
      document.removeEventListener('click', trackButtonClick)
      document.removeEventListener('click', trackLeadMagnet)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return null
}