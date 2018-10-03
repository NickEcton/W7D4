# json.extract! @guest, :name, :age, :favorite_color

json.partial! 'guest', guest: @guest
json.extract! @guest, :gifts
