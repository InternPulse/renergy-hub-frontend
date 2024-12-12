import {
  PopoverContent
} from "../../../src/components/ui/popover"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../src/components/ui/tabs"

import { EllipsisVertical, SquareArrowOutUpRight, X, User, Mail, Phone } from "lucide-react"

const PopOver = () => {
  return (
    <div>
      <PopoverContent className="p-0 h-auto">
                    <section className="h-auto">
                      <div  className="flex justify-between bg-green-400 p-2">
                        <div className="flex">
                          <div className="flex size-8">
                            <EllipsisVertical />
                            <EllipsisVertical />
                          </div>
                          Order #1119256
                        </div>
                        <div className="flex">
                          <SquareArrowOutUpRight className="size-4" />
                          <X className="size-4" />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex">
                          <User className="size-6 m-1" /> Esther Howard
                        </div>
                        <div className="flex">
                          <Mail className="size-6 m-1" /> example@gmail.com
                        </div>
                        <div className="flex">
                          <Phone className="size-6 m-1" /> +234 8566907
                        </div>
                        
                      </div>
                      <div>

                      </div>
                      <div className="p-2">
                        <Tabs defaultValue="order" className="w-full">
                          <TabsList className="w-full mx-auto">
                            <TabsTrigger value="order">Order Items</TabsTrigger>
                            <TabsTrigger value="delivery">Delivery</TabsTrigger>
                          </TabsList>
                          <TabsContent value="order">
                            <div className="p-2 text-sm border-b-2">
                              <div>
                                Star Plus Solar Inverter Battery
                              </div>
                              <div>
                                1 x 120,000
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="delivery">
                            <div className="flex p-2 text-sm border-b-2">
                              <p className="w-1/3">Delivery Location</p>
                              <p>18b Avenue Estate Off Ajah Lagos</p>
                            </div>
                            <div className="flex p-2 text-sm">
                              <p className="w-1/3">Delivery Status</p>
                              <p className="pt-2"><span className="bg-green-800 text-white p-2 rounded-md">Completed</span></p>
                            </div>
                          </TabsContent>
                        </Tabs>

                      </div>
                    </section>
                  </PopoverContent>
    </div>
  )
}

export default PopOver
