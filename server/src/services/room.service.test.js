import {
  getRooms,
  appendRoom,
  setRooms,
  findRoomByTimeOption,
  filterRoom,
} from './room.service';

describe('roomService', () => {
  beforeEach(() => {
    setRooms([]);
  });

  describe('getRooms', () => {
    it('returns rooms', () => {
      const rooms = getRooms();

      expect(rooms).toHaveLength(0);
    });
  });

  describe('appendRoom', () => {
    it('adds rooms', () => {
      appendRoom({
        roomName: 'NEW_ROOM',
        timeOption: '25분',
        categoryOption: '공부',
        owner: 1,
      });

      const rooms = getRooms();

      expect(rooms).toHaveLength(1);
    });
  });

  describe('findRoomByTimeOption', () => {
    context('rooms안에 room이 있을경우', () => {
      const existingRoom = {
        roomName: 'NEW_ROOM',
        timeOption: '25분',
        categoryOption: '공부',
        owner: 1,
      };
      beforeEach(() => {
        appendRoom(existingRoom);
      });

      it('returns room', () => {
        expect(findRoomByTimeOption('25분')).toEqual(existingRoom);
      });
    });
  });

  describe('filterRoom', () => {
    context('with rooms containing the specific room', () => {
      const existingRoom = {
        roomName: 'NEW_ROOM',
        timeOption: '25분',
        categoryOption: '공부',
        owner: 1,
      };
      beforeEach(() => {
        appendRoom(existingRoom);
      });

      it('removes the room', () => {
        filterRoom('NEW_ROOM');

        expect(getRooms()).toHaveLength(0);
      });
    });
  });
});
