json.extract! @party, :name
json.set! :guests do
  json.array! @party.guests do |guest|
    json.extract! guest, :name
    json.set! :gifts do
      json.array! guest.gifts do |gift|
        json.extract! gift, :title, :description
      end
    end
  end
end
