# frozen_string_literal: true

# Provide stubs for taint/untaint APIs removed in Ruby 3.2 so Liquid 4.0.3
# continues to work when bundled through github-pages.
unless "".respond_to?(:untaint)
  class String
    def untaint
      self
    end
  end
end

unless Object.new.respond_to?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end
