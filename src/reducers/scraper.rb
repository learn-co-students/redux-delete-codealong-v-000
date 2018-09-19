
require_relative './brands.rb'
require 'pry'
require 'capybara/poltergeist'


class EthicalClothing::Scraper

  #scrape page and instantiate brands
  def self.get_and_create_brands
    session = Capybara::Session.new(:poltergeist)
    session.visit("http://simplylivandco.com/blog/best-places-to-buy-affordable-ethical-fashion")
    brand_elements = session.all("h3")

    brand_elements.each do |element|
      #grab brand name, price, and url
      #Skip any element that is not a brand
      if element.text.include?(':')
        info = element.text.split(':')
        name = info[0]
        price = info[1]
        url = element.first('a')['href']

        brand = EthicalClothing::Brand.new(name, price, url)

      else
        nil
      end
    end
    nil
  end

  #scrape website for description
  def self.get_description
    session = Capybara::Session.new(:poltergeist)
    session.visit("http://simplylivandco.com/blog/best-places-to-buy-affordable-ethical-fashion")
    # desc_holder = []
    desc_elements = session.all("p")

    desc_elements.collect do |element|
      element.text
    end[3..-1]



  end

  #Add description as attribute to  to brand instance
  def self.match
    descs = self.get_description
    brands = EthicalClothing::Brand.all

    #iterate through brands and descriptions and match them based on index
    i = 0
    brands.each do |brand|
      j = 0
      descs.each do |desc|
        brand.description = desc if i == j
        j += 1
      end
      i += 1
    end
    #Get rid of second "Bamboo Body that appears twice on website list"
    EthicalClothing::Brand.all.delete_at(39)
  end

end
