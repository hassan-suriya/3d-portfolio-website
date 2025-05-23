import { useEffect, useRef } from 'react'
import { RoomType } from '@/components/Portfolio3D'

interface UseScrollNavigationProps {
  currentRoom: RoomType
  onRoomChange: (room: RoomType) => void
  isTransitioning: boolean
}

export const useScrollNavigation = ({
  currentRoom,
  onRoomChange,
  isTransitioning
}: UseScrollNavigationProps) => {
  const lastScrollTime = useRef(0)
  const scrollCooldown = 1000 // 1 second cooldown between transitions

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault()
      
      const now = Date.now()
      if (now - lastScrollTime.current < scrollCooldown || isTransitioning) {
        return
      }

      const rooms: RoomType[] = ['hero', 'about', 'projects', 'contact']
      const currentIndex = rooms.indexOf(currentRoom)
      
      if (e.deltaY > 0 && currentIndex < rooms.length - 1) {
        onRoomChange(rooms[currentIndex + 1])
        lastScrollTime.current = now
      } else if (e.deltaY < 0 && currentIndex > 0) {
        onRoomChange(rooms[currentIndex - 1])
        lastScrollTime.current = now
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now()
      if (now - lastScrollTime.current < scrollCooldown || isTransitioning) {
        return
      }

      const rooms: RoomType[] = ['hero', 'about', 'projects', 'contact']
      const currentIndex = rooms.indexOf(currentRoom)

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          if (currentIndex < rooms.length - 1) {
            onRoomChange(rooms[currentIndex + 1])
            lastScrollTime.current = now
          }
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          if (currentIndex > 0) {
            onRoomChange(rooms[currentIndex - 1])
            lastScrollTime.current = now
          }
          break
        case 'Home':
          e.preventDefault()
          onRoomChange('hero')
          lastScrollTime.current = now
          break
        case 'End':
          e.preventDefault()
          onRoomChange('contact')
          lastScrollTime.current = now
          break
      }
    }

    // Add event listeners
    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentRoom, onRoomChange, isTransitioning])
}
