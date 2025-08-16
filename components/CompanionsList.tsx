import React from "react";
interface CompanionsListProp {
  title: string;
  classNames?: string;
  companions?: Companion[];
}
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProp) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">Recent sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Method</TableHead>
            <TableHead className="text-right text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(
            ({ id, companion, duration, subject, name, topic }) => (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className="flex items-center gap-2">
                      <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor : }}>
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt="subject"
                          width={35}
                          height={35}
                        ></Image>
                      </div>
                    </div>
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
